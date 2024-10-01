import { div } from 'framer-motion/client'
import Card from '../components/Card'

export default function Page() {
  const studentInfo = {
    name: "HassanRJ",
    age: 16,
    rollNumber: "00426351",
    class: "10th Grade",
    imageUrl: "/assets/pic.jpg?height=128&width=128"
  }
  const studentInfo1 = {
    name: "Huzaifa",
    age: 17,
    rollNumber: "00421247",
    class: "11th Grade",
    imageUrl: "/assets/pic1.png?height=128&width=128"
  }
  const studentInfo2 = {
    name: "Osman",
    age: 14,
    rollNumber: "00428750",
    class: "12th Grade",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_XjRjskyuPxueJQRYwGYcUMX7oina_l1yg&s?height=128&width=128"
  }

  return (
    <div className='lg:flex lg:gap-10 flex-row'>
      <Card student={studentInfo} />
      <Card student={studentInfo1} />
      <Card student={studentInfo2} />
    </div>
  )
}