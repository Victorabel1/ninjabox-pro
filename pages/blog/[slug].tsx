import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// --- Placeholder Data ---
// In a real app, this data would come from a CMS or database
const placeholderPosts = [
  {
    slug: 'first-post',
    title: 'The Future of Agentic AI in Business',
    category: 'Data & AI',
    date: 'November 10, 2025',
    excerpt: 'Explore how autonomous AI agents are moving beyond simple automation to become strategic partners in decision-making...',
    content: `
      <p>This is the full blog post content for "The Future of Agentic AI in Business". In a real application, this would be rich HTML content fetched from a CMS.</p>
      <p>Agentic AI represents a paradigm shift. Unlike traditional models that require explicit instructions for every step, agentic systems can perceive their environment, make decisions, and take actions to achieve complex, multi-step goals.</p>
      <h2>What This Means for SMEs</h2>
      <p>For small and medium enterprises, this technology is a game-changer. It's no longer about just automating a single task; it's about delegating an entire workflow to an AI agent.</p>
      <ul>
        <li>Customer Support Agents that can handle complex queries.</li>
        <li>Marketing Agents that can run and optimize ad campaigns.</li>
        <li>Data Analysis Agents that can prepare and present reports.</li>
      </ul>
      <p>The barrier to entry for sophisticated automation is dropping rapidly, and businesses that adapt will gain a significant competitive edge.</p>
    `,
  },
  { slug: 'second-post', title: 'Mastering React Server Components', category: 'Software Engineering', date: 'November 5, 2025', excerpt: 'A deep dive...', content: '<p>Full content for React Server Components...</p>'},
  { slug: 'third-post', title: '5 UI/UX Principles for High-Conversion SaaS', category: 'Product & Design', date: 'October 30, 2025', excerpt: 'Go beyond pretty layouts...', content: '<p>Full content for UI/UX Principles...</p>'},
];
// --- End Placeholder Data ---

type Post = typeof placeholderPosts[0];

// --- Page Component ---
export default function BlogPostPage({ post }: { post: Post }) {
  if (!post) {
    return <div>Loading...</div>; // Handle fallback state
  }

  return (
    <>
      <Head>
        <title>{post.title} - Ninjabox Journal</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <section className="py-24">
        <div className="container grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-3">
          
          {/* Main Article Content */}
          <article className="lg:col-span-2">
            <Link href="/blog" className="inline-flex items-center text-sm text-blue-600 hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to The Ninjabox Journal
            </Link>
            
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              {post.date} &bull; {post.category}
            </p>
            
            {/* Placeholder for Featured Image */}
            <div className="w-full h-64 bg-muted rounded-lg mb-8">
              <span className="flex items-center justify-center h-full text-muted-foreground">
                [Featured Image Placeholder]
              </span>
            </div>

            {/* Post Body */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>

          {/* Right Sidebar */}
          <BlogSidebar />

        </div>
      </section>
    </>
  );
}

// --- Data Fetching Functions ---

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all possible slugs
  const paths = placeholderPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false }; // fallback: false means 404 if not found
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  // Find the post that matches the slug
  const post = placeholderPosts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
};