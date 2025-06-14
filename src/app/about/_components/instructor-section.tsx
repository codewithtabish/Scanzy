'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BorderBeam } from "@/components/magicui/border-beam";


const instructors = [
  {
    name: 'TALHA TABISH',
    role: 'SOFTWARE ENGINEER',
    img: '/images/dev-1.jpeg',
    bio: 'Talha is a versatile software engineer who crafts scalable, intuitive digital products. Passionate about full-stack development, he blends creativity and code to deliver modern web solutions that users love.',
  },
  {
    name: 'SUDAIS SAQIB',
    role: 'WI EXPERT ENGINEER',
    img: '/images/dev-1.jpeg',
    bio: 'Sudais is a skilled wireless infrastructure engineer focused on reliable, high-speed networking. He brings deep technical knowledge and a strategic mindset to optimize connectivity in real-world, mission-critical environments.',
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-500 mb-4">
            Meet Our <strong className="text-primary ml-2">Teams</strong>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Learn from industry professionals with years of experience in their respective fields
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {instructors.map((instructor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="group overflow-hidden  p-0 shadow-none transition-transform hover:-translate-y-1 ">
                
                {/* Avatar */}
                <div className="flex justify-center mt-6">
                  <div className="relative h-28 w-28 rounded-full ring-2 ring-primary overflow-hidden">
                    <Avatar className="h-28 w-28">
                      <AvatarImage
                        src={instructor.img}
                        alt={instructor.name}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {instructor.name.split(' ')[0][0]}
                        {instructor.name.split(' ')[1]?.[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mt-4">{instructor.name}</h3>
                  <p className="text-tab-purple text-sm mb-2">{instructor.role}</p>
                  <motion.p
                    className="text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {instructor.bio}
                  </motion.p>
                </CardContent>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
