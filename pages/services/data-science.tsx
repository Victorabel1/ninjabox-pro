import Head from 'next/head';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function DataSciencePage() {
  return (
    <>
      <Head>
        <title>Data Science & Analytics - Ninjabox</title>
        <meta
          name="description"
          content="Transforming raw data into predictive insights."
        />
      </Head>

      {/* --- 1. Page Hero Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl">
          <Link href="/services" className="inline-flex items-center text-sm text-blue-600 hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Link>
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            Data Science & Analytics
          </h1> {/* */}
          <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
            Transforming raw data into predictive insights and actionable 
            intelligence to fuel strategic decision-making. {/* */}
          </p>
        </div>
      </section>

      {/* --- 2. Placeholder Content --- */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Content Coming Soon
              </h2>
              <p className="text-muted-foreground">
                This page is under construction. We are preparing detailed 
                information about our data services, including:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li>Business Intelligence & Reporting Dashboards {/* */}</li>
                <li>Predictive Analytics & Machine Learning Models {/* */}</li>
                <li>Big Data Processing & Engineering {/* */}</li>
                <li>Data Warehousing & ETL Solutions {/* */}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}