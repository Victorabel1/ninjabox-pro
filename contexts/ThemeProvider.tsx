import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

// Define the shape of our theme states
type Theme = 'day' | 'night';
type ManualTheme = Theme | 'system';

interface ThemeProviderState {
  theme: Theme;
  manualTheme: ManualTheme;
  setManualTheme: (theme: ManualTheme) => void;
}

// Create the context with an undefined default
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // State for the user's *manual* choice (what they pick in the toggle)
  const [manualTheme, setManualThemeState] = useState<ManualTheme>('system');

  // State for the *actual* theme being applied
  const [effectiveTheme, setEffectiveTheme] = useState<Theme>('day');

  // This effect runs once on mount to set the initial theme
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('ninjabox-theme') as ManualTheme | null;
      if (storedTheme) {
        setManualThemeState(storedTheme);
      } else {
        setManualThemeState('system');
      }
    } catch (e) {
      // localStorage might be disabled
      setManualThemeState('system');
    }
  }, []);

  // This effect re-runs whenever the manualTheme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    let currentTheme: Theme;

    if (manualTheme === 'system') {
      // 6:00 am (6) to 5:59 pm (17) is 'day'
      const localHour = new Date().getHours();
      currentTheme = localHour >= 6 && localHour < 18 ? 'day' : 'night';
    } else {
      // Use the user's manual choice
      currentTheme = manualTheme;
    }

    setEffectiveTheme(currentTheme);

    // Update localStorage
    try {
      localStorage.setItem('ninjabox-theme', manualTheme);
    } catch (e) {
      // Failed to write to localStorage
    }

    // Apply the theme class to the <html> element
    root.classList.remove('day', 'night');
    root.classList.add(currentTheme);

    // This tells Tailwind to use dark mode
    if (currentTheme === 'night') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

  }, [manualTheme]); // Re-run when the user toggles the theme

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    theme: effectiveTheme,
    manualTheme,
    setManualTheme: setManualThemeState,
  }), [effectiveTheme, manualTheme]);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to easily access the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};