import Head from 'next/head';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogSidebar } from '@/components/blog/BlogSidebar';

// Data for Sidebar Categories [cite: 164-170]
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

// Placeholder data for blog posts
const placeholderPosts = [
  {
    slug: 'first-post',
    title: 'The Future of Agentic AI in Business',
    category: 'Data & AI',
    date: 'November 10, 2025',
    excerpt: 'Explore how autonomous AI agents are moving beyond simple automation to become strategic partners in decision-making...',
  },
  {
    slug: 'second-post',
    title: 'Mastering React Server Components',
    category: 'Software Engineering',
    date: 'November 5, 2025',
    excerpt: 'A deep dive into React Server Components (RSCs) and how they are changing the game for web performance and architecture...',
  },
  {
    slug: 'third-post',
    title: '5 UI/UX Principles for High-Conversion SaaS',
    category: 'Product & Design',
    date: 'October 30, 2025',
    excerpt: 'Go beyond pretty layouts. We break down the core design principles that directly impact user engagement and conversion rates...',
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>The Ninjabox Journal - Insights on Technology & Business</title>
        <meta
          name="description"
          content="Our digital hub for ideas, analysis, and practical insights on software, data, design, and business strategy."
        />
      </Head>

      {/* --- 1. Page Hero Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            The Ninjabox Journal
          </h1> {/* */}
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Welcome to our digital hub for ideas, analysis, and practical insights.
            Here, our team shares expertise on the trends shaping our world,
            aiming to demystify the complex and empower our community. {/* */}
          </p>
        </div>
      </section>

      {/* --- 2. Blog Content & Sidebar Section --- */}
      <section className="py-24">
        <div className="container grid max-w-7xl justify-center mx-auto grid-cols-1 gap-16 lg:grid-cols-3">

          {/* Main Content: Blog Post List */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Latest Articles
            </h2>
            {placeholderPosts.map((post) => (
              <article key={post.slug}>
                <Card className="bg-muted/20 border-none shadow-none">
                  <CardHeader>
                    <CardDescription className="text-sm">
                      {post.date} &bull; {post.category}
                    </CardDescription>
                    <CardTitle className="text-2xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="px-0">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </article>
            ))}
            {/* Pagination (Placeholder) */}
            <div className="flex justify-center gap-4 mt-16">
              <Button variant="outline">Older Posts</Button>
              <Button variant="outline">Newer Posts</Button>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </section>
    </>
  );
}
