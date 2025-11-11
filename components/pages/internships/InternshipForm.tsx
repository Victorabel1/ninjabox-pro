"use client"; // This component must be a client component

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Areas of Interest [cite: 127]
const areasOfInterest = [
  { id: 'development', label: 'Software Development' },
  { id: 'analytics', label: 'Data Analytics' },
  { id: 'design', label: 'UI/UX Design' },
  { id: 'marketing', label: 'Digital Marketing' },
] as const;

// 1. Define the form schema with Zod
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  university: z.string().min(3, "Please enter your university name."),
  course: z.string().min(3, "Please enter your course of study."),
  yearOfStudy: z.enum(['200L', '300L', '400L', '500L']),
  startDate: z.date({ required_error: 'A start date is required.' }),
  areasOfInterest: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one area of interest.',
  }),
  statement: z.string().max(300, "Must be 300 characters or less.").min(10, "Please tell us a bit more."),
  cv: z.instanceof(File).optional(), // Add file validation as needed
  siwesLetter: z.instanceof(File).optional(), // Add file validation as needed
  portfolioLink: z.string().url("Must be a valid URL (e.g., https://...)").optional().or(z.literal('')),
});

type FormValues = z.infer<typeof formSchema>;

export function InternshipForm() {
  // 2. Define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      university: '',
      course: '',
      areasOfInterest: [],
      statement: '',
      portfolioLink: '',
    },
  });

  // 3. Define the submit handler
  function onSubmit(values: FormValues) {
    // This is where you would send the data to your API
    console.log(values);
    alert('Application submitted! (Check the console for data)');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField control={form.control} name="fullName" render={({ field }) => (
            <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+234..." {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="university" render={({ field }) => (
            <FormItem><FormLabel>University/Institution</FormLabel><FormControl><Input placeholder="University of Jos" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="course" render={({ field }) => (
            <FormItem><FormLabel>Course of Study</FormLabel><FormControl><Input placeholder="Computer Science" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="yearOfStudy" render={({ field }) => (
            <FormItem><FormLabel>Current Year of Study</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl><SelectTrigger><SelectValue placeholder="Select your year" /></SelectTrigger></FormControl>
                <SelectContent>
                  <SelectItem value="200L">200L</SelectItem>
                  <SelectItem value="300L">300L</SelectItem>
                  <SelectItem value="400L">400L</SelectItem>
                  <SelectItem value="500L">500L</SelectItem>
                </SelectContent>
              </Select><FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="startDate" render={({ field }) => (
          <FormItem className="flex flex-col"><FormLabel>Preferred Internship Start Date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button variant={"outline"} className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                    {field.value ? (format(field.value, 'PPP')) : (<span>Pick a date</span>)}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
              </PopoverContent>
            </Popover><FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="areasOfInterest" render={() => (
          <FormItem><FormLabel>Area of Interest</FormLabel>
            <FormDescription>Select all that apply.</FormDescription>
            {areasOfInterest.map((item) => (
              <FormField key={item.id} control={form.control} name="areasOfInterest" render={({ field }) => (
                <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, item.id])
                          : field.onChange(field.value?.filter((value) => value !== item.id));
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              )} />
            ))} <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="statement" render={({ field }) => (
          <FormItem><FormLabel>Personal Statement</FormLabel>
            <FormControl>
              <Textarea placeholder="Briefly tell us why you want to intern at Ninjabox..." {...field} />
            </FormControl>
            <FormDescription>Max 300 words.</FormDescription><FormMessage />
          </FormItem>
        )} />
        
        {/* File inputs are complex. Using basic placeholders for now. */}
        <FormItem><FormLabel>Upload Your CV</FormLabel><FormControl><Input type="file" /></FormControl><FormMessage /></FormItem>
        <FormItem><FormLabel>Upload Your IT/SIWES Letter</FormLabel><FormControl><Input type="file" /></FormControl><FormMessage /></FormItem>

        <FormField control={form.control} name="portfolioLink" render={({ field }) => (
          <FormItem><FormLabel>Link to Portfolio/GitHub (Optional)</FormLabel><FormControl><Input placeholder="https://github.com/your-username" {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
          Submit Application
        </Button>
      </form>
    </Form>
  );
}