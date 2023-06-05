import { startOfWeek } from "date-fns";
import seedrandom from "seedrandom";

const colors = ["Yellow", "Green", "Blue", "Purple", "Pink", "Red", "Orange"];
const emotions = [
  "Happy",
  "Disgusted",
  "Sad",
  "Surprised",
  "Fearful",
  "Angry",
  "Bad",
];
const prompts = [
  // TODO: add prompts
];

interface WeeklyDraw {
  color: string;
  emotion: string;
  prompt: string;
}

function App() {
  const generateWeeklyDraw = (date: Date): WeeklyDraw => {
    const week = startOfWeek(date);
    const ms = week.getTime();
    const generator = seedrandom(`${ms}`);
    const random = () => Math.abs(generator.int32());

    const color = colors[random() % colors.length];
    const emotion = emotions[random() % emotions.length];

    return { color, emotion, prompt: "TODO" };
  };

  const weekly = generateWeeklyDraw(new Date());

  return <div className="flex flex-col justify-center items-center gap-2">
    <div className="font-bold text-2xl"> Prompt: {weekly.prompt} </div>
    <div> Color: {weekly.color} </div>
    <div> Emotion: {weekly.emotion} </div>
  </div>;
}

export default App;
