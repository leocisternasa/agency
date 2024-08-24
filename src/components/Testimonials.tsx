import Image from 'next/image';
import React from 'react';
import { Container } from '@/components/Container';

import pabloImage from '@/../public/pablo_avatar.jpeg';
import criAvatar from '@/../public/critobal_avatar.jpeg';
import userThreeImg from '../../public/img/user3.jpg';

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
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
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
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
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              This is an <Mark>awesome</Mark> landing page template I&apos;ve
              seen. I would use this for anything.
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
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
    <div className="flex items-center mt-8 space-x-3 gap-4 h-40">
      <div className="rounded-full overflow-hidden filter grayscale max-w-[30%]">
        <Image
          src={props.image}
          width="80"
          height="80"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div className="max-w-[60%] flex flex-col">
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
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
