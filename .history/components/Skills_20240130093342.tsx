import ProgressBar from "./ProgressBar";

const skills = [
  { iconPath: "/html5.png", title: "HTML", percentage: 90 },
  { iconPath: "/css.png", title: "CSS", percentage: 80 },
  {
    iconPath: "/js.png",
    title: "JavaScript",
    percentage: 95,
  },
  {
    iconPath: "/mongo.png",
    title: "MongoDB",
    percentage: 90,
  },
  {
    iconPath: "/react.png",
    title: "React",
    percentage: 100,
  },
  { iconPath: "/git.png", title: "Git", percentage: 89 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-fit px-[40px] py-20 relative bg-gray-100"
    ></section>
  );
};

export default Skills;
