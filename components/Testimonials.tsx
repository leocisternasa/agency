import Image from 'next/image';
import React from 'react';
import { Container } from './Container';

import pabloImage from '@/public/pablo_avatar.jpeg';
import criAvatar from '@/public/critobal_avatar.jpeg';
import graceAvatar from '@/public/grace_avatar.jpeg';

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 md:px-14 p-4 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="md:text-xl text-lg leading-normal ">
              Working with <strong>Grid Trust</strong> transformed our data
              visualization. Their AG Grid expertise enhanced our marketing
              strategies, enabling real-time analysis and informed
              decision-making. Highly recommended for data-driven solutions!
            </p>

            <Avatar
              image={pabloImage}
              name="Pablo Saavedra"
              title="Professional in Web Analytics, Data Driven, Performance Marketing and Growth Marketing."
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 md:px-14 p-4 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="md:text-xl text-lg leading-normal ">
              AG Grid has transformed our financial reporting. Its powerful
              features enable fast, accurate analysis of large datasets, making
              compliance and visualization effortless. Highly recommended for
              any finance professional!
            </p>

            <Avatar
              image={criAvatar}
              name="Cristobal Torres"
              title="Finance professional, information and management control engineer "
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 md:px-14 p-4 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="md:text-xl text-lg leading-normal ">
              AG Grid is a high-impact tool for omnichannel strategy and
              e-commerce. <strong>Grid Trust</strong>'s expertise has
              significantly enhanced our data management, streamlining
              operations and improving customer experience. Their implementation
              skills are unmatched!
            </p>

            <Avatar
              image={graceAvatar}
              name="Grace Argote A."
              title="Omnichannel strategist and e-commerce specialist. International trade initiatives and digital transformation at Walmart"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex flex-col md:flex-row  items-center  mt-8 md:space-x-3 gap-4 h-full">
      <div className="rounded-full overflow-hidden filter grayscale md:max-w-[30%]">
        <Image
          src={props.image}
          width="80"
          height="80"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div className="md:max-w-[60%] flex flex-col justify-center items-center md:justify-start md:items-start">
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400 text-center md:text-left">
          {props.title}
        </div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {' '}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{' '}
    </>
  );
}
