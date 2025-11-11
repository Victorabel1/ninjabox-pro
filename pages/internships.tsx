import Head from 'next/head';
import { CheckCircle } from 'lucide-react';
import { InternshipForm } from '@/components/pages/internships/InternshipForm';

// Data from doc [cite: 108-113]
const whyInternItems = [
  'Real-World Impact: You will contribute to live client projects and internal R&D initiatives.',
  'Mentorship: You will be assigned a dedicated mentor who will guide you, provide feedback, and support your professional growth.',
  'Skill Development: Gain practical experience with our modern technology stack and agile development processes.',
  'Networking: Connect with industry professionals and build a network that will last a lifetime.',
  'Career Opportunities: Exceptional interns may be offered full-time positions upon graduation.',
];

// Data from doc [cite: 114-118]
const eligibilityItems = [
  'Must be a current undergraduate student in Computer Science, Engineering, or a related field.',
  'Must have an official Industrial Training (SIWES) letter from your institution.',
  'Must have foundational knowledge in at least one programming language.',
  'Possess strong problem-solving skills and a passion for technology.',
];

export default function InternshipsPage() {
  return (
    <>
      <Head>
        <title>Internships - Launch Your Tech Career at Ninjabox</title>
        <meta
          name="description"
          content="Gain invaluable hands-on experience by working on real-world projects with our team of expert engineers."
        />
      </Head>

      {/* --- 1. Page Hero Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            Launch Your Tech Career with the
            <br />
            <span className="text-blue-600">Ninjabox Internship Program</span>
          </h1> {/* */}
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Gain invaluable hands-on experience by working on real-world 
            projects alongside our team of expert engineers and strategists. {/* */}
          </p>
        </div>
      </section>

      {/* --- 2. Why Intern & Eligibility Section --- */}
      <section className="py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-2">
          
          {/* Why Intern With Us? */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Why Intern With Us?
            </h2> {/* */}
            <ul className="space-y-4">
              {whyInternItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-blue-600" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Criteria */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Eligibility Criteria
            </h2> {/* */}
            <ul className="space-y-4">
              {eligibilityItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-blue-600" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- 3. Application Form Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-12">
            Application Form
          </h2> {/* */}
          <InternshipForm />
        </div>
      </section>
    </>
  );
}