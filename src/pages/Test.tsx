import { Switch } from "@nextui-org/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Test() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
        <Switch
          isSelected={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          thumbIcon={({ isSelected }) =>
            isSelected ? <Moon size={14} /> : <Sun size={14} />
          }
        />
    </div>
  );
}