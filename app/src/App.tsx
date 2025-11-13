import { useState } from 'react'
import './App.css'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FlipableCard,
} from "@/components/ui/card"
import picture1 from './assets/artifact1.png'
import picture2 from './assets/artifact2.png'
import picture3 from './assets/artifact3.png'  


function App() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const artifacts = [
    {
      title: "Artifact 1:",
      frontContent: "This is the first artifact for the Peer Connections course.",
      backContent: "This artifact is a thank you card I received from fellow peer educators. It shows that I have been able to touch many people, whether it be other educators or students. It really highlights that the work I do is meaningful and impactful, and it helped build relationships, I wouldn't have been able to do this without the support of my peers.",
      picture: picture1,
      name: "Thank You Card"
    },
    {
      title: "Artifact 2:",
      frontContent: "This is the second artifact for the Peer Connections course.",
      backContent: "This second artifact has gotten me through out all of college. I've used OneNote to take notes since freshman year, and it has been extremely convenient to have a central place to store all of my notes. Especially this semester, I have found a new use for it, by using it to refresh my memory before tutoring students. It's been especially useful for sessions, where a student has taken the same professor as me and I need to refresh my memory on the material to help them understand it better.",
      picture: picture2,
      name: "OneNote"
    },
    {
      title: "Artifact 3:",
      frontContent: "This is the third artifact for the Peer Connections course.",
      backContent: "My last artifact is this website I built from scratch. It's a simple website, but it combines my major, the class I am embedded in (CS 46A), and allows me to put it all together in a way that is meaningful and impactful. When I first joined SJSU, making a website would've been far past my abilities at the time, but now that I have learned how to code, it's a really powerful artifact to show that I have grown and can now help others in the same way. It's especialy impactful because most of the students I have interacted with are first years and I want to show them that anything is possible when you put your mind to it.",
      picture: picture3,
      name: "Website"
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-blue-900 p-4">
        <h1 className="text-5xl font-bold ">Huy's Capstone Reflection Project</h1>
        <p className="text-xl mt-4">a capstone project in the most CS tutor way :)</p>
        {artifacts.map((artifact, index) => (
          <FlipableCard
            key={index}
            className="w-full max-w-md mt-4"
            isFlipped={flippedCards.has(index)}
            onFlip={() => toggleCard(index)}
            frontContent={
              <Card className="w-full h-full flex flex-col text-blue-900">
                <CardHeader className="shrink-0">
                  <CardTitle className='text-xl font-bold'>{artifact.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center overflow-hidden min-h-0">
                  <img 
                    src={artifact.picture} 
                    alt={artifact.title} 
                    className="w-full h-full rounded-xl " 
                  />
                </CardContent>
              </Card>
            }
            backContent={
              <Card className="w-full h-full text-blue-900">
                <CardHeader>
                  <CardTitle>{artifact.title} ({artifact.name})</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{artifact.backContent}</p>
                </CardContent>
              </Card>
            }
          />
        ))}
      </div>
    </>
  )
}

export default App
