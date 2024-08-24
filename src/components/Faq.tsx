'use client';
import React from 'react';
import { Container } from '@/components/Container';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: 'What is AG Grid and why should I use it in my project?',
    answer:
      'AG Grid is a powerful JavaScript library for creating interactive and high-performance data tables and grids. You should consider it for your project if you need to handle large amounts of data, perform complex operations like filtering and sorting, or if you require a highly customizable user interface for tabular data presentation.',
  },
  {
    question: "What's types of projects are ideal for using AG Grid?",
    answer: (
      <div>
        <h2 className="mb-3 underline">
          AG Grid is ideal for a wide range of projects, including:
        </h2>
        <ul className="list-disc flex flex-col gap-1">
          <li>Financial and data analysis dashboards</li>
          <li>Inventory management systems</li>
          <li>E-commerce platforms with extensive catalogs</li>
          <li>Human resource management applications</li>
          <li>
            Any project requiring manipulation and visualization of large
            datasets
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What's the difference between AG Grid Community and AG Grid Enterprise? ",
    answer:
      'AG Grid Community is the free, open-source version that offers basic but powerful functionalities. AG Grid Enterprise is the paid version that includes advanced features such as row grouping, aggregation, custom filters, Excel export, and dedicated technical support.',
  },
  {
    question:
      'Can you integrate AG Grid with my existing JavaScript framework? ',
    answer:
      'Yes, AG Grid is highly flexible and can be integrated with the most popular frameworks, including React, Angular, and Vue.js. Our team has experience integrating AG Grid with various development environments.',
  },
  {
    question:
      'What advantages does your agency offer compared to in-house development of AG Grid solutions?',
    answer: (
      <div>
        <h2 className="mb-3 underline ">Our agency offers:</h2>
        <ul className="list-disc flex flex-col gap-1">
          <li>Specialized expertise in AG Grid and performance optimization</li>
          <li>
            Faster and more efficient development due to our familiarity with
            the library
          </li>
          <li>Customized solutions tailored to your specific needs</li>
          <li>Ongoing support and post-implementation maintenance</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      'How long does it typically take to develop a project with AG Grid? ',
    answer:
      "Development time varies depending on project complexity. A simple project can take 2-4 weeks, while more complex projects may require 2-6 months. We provide detailed estimates after assessing each client's specific requirements.",
  },
  {
    question:
      'Do you offer maintenance and support services after implementation? ',
    answer:
      'Yes, we offer ongoing maintenance and support plans to ensure your AG Grid solution continues to function optimally and stays up-to-date with the latest versions and best practices.',
  },
  {
    question: 'How do you handle data security in projects using AG Grid?',
    answer:
      'Data security is a priority. We implement security best practices, including data encryption, robust authentication, and granular access control. Additionally, we ensure that the AG Grid implementation complies with relevant security standards for your industry.',
  },
  {
    question:
      'Can you provide examples or case studies of previous projects with AG Grid? ',
    answer:
      "Yes, we have several case studies demonstrating our expertise with AG Grid across various sectors. We'd be happy to share examples relevant to your specific industry or project type.",
  },
  {
    question: 'What is your work process for an AG Grid development project?',
    answer: (
      <div>
        <h2 className="mb-3 underline">Our process typically includes:</h2>
        <ul className=" list-decimal flex flex-col gap-1">
          <li>Initial assessment and requirements definition</li>
          <li>Architecture design and prototyping</li>
          <li>Iterative development with regular client reviews</li>
          <li>Comprehensive testing and performance optimization</li>
          <li>Implementation and training</li>
          <li>Post-launch support and ongoing maintenance</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'How does AG Grid handle large datasets?',
    answer:
      'AG Grid is designed to efficiently manage large datasets through features like virtual DOM, row virtualization, and lazy loading. These techniques ensure smooth performance even when dealing with hundreds of thousands of rows.',
  },
  {
    question: 'Can Can AG Grid be used for mobile applications?',
    answer:
      'Yes, AG Grid is responsive and can be used in mobile web applications. It offers touch support and can be optimized for various screen sizes, making it suitable for both desktop and mobile interfaces. These questions and answers provide a solid foundation for the FAQ section of your website, covering the most important aspects that potential clients might want to know about your AG Grid development services.',
  },
];
