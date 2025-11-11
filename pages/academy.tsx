import Head from 'next/head';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BarChart, Tag, CheckCircle } from 'lucide-react';

// Data for Courses [cite: 76-97]
const courses = [
  {
    title: 'Full-Stack Software Development',
    description: 'Master both front-end and back-end technologies to build complete, scalable web applications. Covers HTML, CSS, JavaScript, React, Node.js, Express, and Databases (SQL & NoSQL).',
    duration: '6 Months (Full-Time)',
    price: '₦350,000',
  },
  {
    title: 'Data Science & Machine Learning',
    description: 'Learn to extract insights from data. This track covers Python programming, data analysis, statistical modeling, machine learning algorithms, and data visualization tools like Power BI.',
    duration: '5 Months (Full-Time)',
    price: '₦300,000',
  },
  {
    title: 'Mobile App Development (Flutter)',
    description: "Build beautiful, high-performance native apps for both iOS and Android from a single codebase using Google's Flutter framework.",
    duration: '4 Months (Full-Time)',
    price: '₦250,000',
  },
  {
    title: 'UI/UX Product Design',
    description: 'Dive into the principles of user-centric design. Learn user research, wireframing, prototyping, and visual design using tools like Figma to create intuitive digital products.',
    duration: '3 Months (Full-Time)',
    price: '₦180,000',
  },
  {
    title: 'Digital Marketing & Analytics',
    description: 'A comprehensive program covering SEO, SEM, Content Marketing, Social Media Strategy, and Google Analytics to drive business growth online.',
    duration: '3 Months (Full-Time)',
    price: '₦150,000',
  },
];

// Data for Application Steps [cite: 98-102]
const applicationSteps = [
  'Choose Your Course: Select the program that aligns with your career goals.',
  'Submit Application: Fill out our online application form.',
  'Assessment: Complete a short aptitude test to evaluate your readiness.',
  'Enrollment: Receive your admission letter and begin your journey.',
];

export default function AcademyPage() {
  return (
    <>
      <Head>
        <title>Ninjabox Academy - Forge Your Career in Tech</title>
        <meta
          name="description"
          content="Intensive, expert-led training programs in Full-Stack Development, Data Science, Flutter, UI/UX Design, and Digital Marketing."
        />
      </Head>

      {/* --- 1. Page Hero Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            Ninjabox Academy: Forge Your Career in Tech
          </h1> {/* */}
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Our intensive, expert-led training programs are designed to equip 
            you with the practical, in-demand skills needed to excel in the 
            global technology industry. {/* */}
          </p>
          <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
            Apply to Academy {/* */}
          </Button>
        </div>
      </section>

      {/* --- 2. Training Philosophy Section --- */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Our Training Philosophy
          </h2> {/* */}
          <div className="prose prose-lg dark:prose-invert mx-auto mt-6 text-muted-foreground">
            <p>
              At Ninjabox Academy, we believe in learning by doing. Our courses 
              are project-based, ensuring that you not only understand the 
              theory but can also apply it to solve real-world problems. {/* */}
            </p>
            <p>
              You will be mentored by industry professionals who work on 
              cutting-edge projects every day. {/* */}
            </p>
          </div>
        </div>
      </section>
      
      {/* --- 3. Available Courses Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
            Available Courses
          </h2> {/* */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="grow">
                  <CardDescription>{course.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" /> {course.duration}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. How to Apply Section --- */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
            How to Apply
          </h2> {/* */}
          <ul className="space-y-6">
            {applicationSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-4 h-6 w-6 shrink-0 text-blue-600" />
                <span className="text-lg text-muted-foreground">{step}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Apply to Academy {/* */}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}