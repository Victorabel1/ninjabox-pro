import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const categories = [
  {
    title: 'Software Engineering',
    description: 'Methodologies, languages, cloud computing, and best practices.',
  },
  {
    title: 'Data & AI',
    description: 'Insights into data analytics, machine learning, and artificial intelligence.',
  },
  {
    title: 'Product & Design',
    description: 'Exploring UI/UX, user-centric design principles, and product management.',
  },
  {
    title: 'Business & Strategy',
    description: 'Analysis of the intersection between technology and business.',
  },
  {
    title: 'Career & Growth',
    description: 'Practical advice, tutorials, and inspiration for students and professionals.',
  },
  {
    title: 'Ninjabox News',
    description: 'The latest updates, announcements, and stories from inside Ninjabox.',
  },
];

export function BlogSidebar() {
  return (
    <aside className="space-y-8 lg:col-span-1">
      {/* Search Bar */}
      <div className="relative">
        <Input placeholder="Search articles..." className="pr-10" />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      </div>

     
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Explore by Category
        </h3>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat.title}>
              <Link href="#" className="group">
                <p className="font-semibold group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}