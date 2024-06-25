import { Link } from "react-router-dom";

const Footer = () => {
  const bodyPartList = [
    "Back",
    "Cardio",
    "Chest",
    "Lower Arms",
    "Lower Legs",
    "Neck",
    "Shoulders",
    "Upper Arms",
    "Upper Legs",
    "Waist",
  ];
  const equipmentList = [
    "Assisted",
    "Band",
    "Barbell",
    "Body weight",
    "Bosu Ball",
    "Cable",
    "Dumbbell",
    "Elliptical Machine",
    "Ez Barbell",
    "Hammer",
    "Kettlebell",
    "Leverage Machine",
    "Medicine Ball",
    "Olympic Barbell",
    "Resistance Band",
    "Roller",
    "Rope",
    "Skierg Machine",
    "Sled Machine",
    "Smith Machine",
    "Stability Ball",
    "Stationary Bike",
    "Stepmill Machine",
    "Tire",
    "Trap Bar",
    "Upper Body Ergometer",
    "Weighted",
    "Wheel Roller",
  ];
  const targetList = [
    "Abductors",
    "Abs",
    "Adductors",
    "Biceps",
    "Calves",
    "Cardiovascular System",
    "Delts",
    "Forearms",
    "Glutes",
    "Hamstrings",
    "Lats",
    "Levator Scapulae",
    "Pectorals",
    "Quads",
    "Serratus Anterior",
    "Spine",
    "Traps",
    "Triceps",
    "Upper Back",
  ];
  return (
    <footer className="mt-8">
      <div className="flex items-start justify-between gap-0 p-8 font-semibold tracking-wide mob:flex-col mob:gap-8">
        <div>
          <h2 className="font-bold uppercase text-lg">Body Parts</h2>
          <ul className="px-3 py-1">
            {bodyPartList.map((part, partIndex) => (
              <li key={partIndex}>
                <Link
                  to={`/exercises/${part.toLowerCase().replaceAll(" ", "")}`}
                  onClick={() =>
                    window.scrollTo({
                      top: 360,
                      behavior: "smooth",
                    })
                  }
                >
                  - {part}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold uppercase text-lg">Equipments</h2>
          <ul className="grid grid-cols-2 px-3 py-1">
            {equipmentList.map((equipment, eqIndex) => (
              <li key={eqIndex}>
                <Link
                  to={`/exercises/${equipment.toLowerCase().replaceAll(" ", "")}`}
                  onClick={() =>
                    window.scrollTo({
                      top: 360,
                      behavior: "smooth",
                    })
                  }
                >
                  - {equipment}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold uppercase text-lg ">Targets</h2>
          <ul className="grid grid-cols-2 px-3 py-1">
            {targetList.map((target, tarIndex) => (
              <li key={tarIndex}>
                <Link
                  to={`/exercises/${target.toLowerCase().replaceAll(" ", "")}`}
                  onClick={() =>
                    window.scrollTo({
                      top: 360,
                      behavior: "smooth",
                    })
                  }
                >
                  - {target}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black text-center text-white rounded-tl-3xl rounded-tr-3xl py-2">
        <a
          href="https://github.com/abdullahelmetwali"
          target="blank"
        >
          &#169; Abdullah ElMetwali - 2024
        </a>
      </div>
    </footer>
  );
};

export default Footer;
