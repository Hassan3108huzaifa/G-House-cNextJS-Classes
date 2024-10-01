'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface StudentInfo {
  name: string
  age: number
  rollNumber: string
  class: string
  imageUrl: string
}

export default function StudentIDCard({ student }: { student: StudentInfo }) {
  return (
    <div className="flex items-center justify-center w-full p-4">
      <motion.div
        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-32 bg-gradient-to-r from-sky-500 to-indigo-500">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="rounded-full overflow-hidden border-4 border-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={student.imageUrl}
                alt={student.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="pt-20 pb-8 px-6 text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {student.name}
          </motion.h2>
          <motion.div
            className="text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p>Age: {student.age}</p>
            <p>Roll Number: {student.rollNumber}</p>
            <p>Class: {student.class}</p>
          </motion.div>
          <motion.div
            className="mt-6 inline-block bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full px-6 py-2 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Student ID
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}