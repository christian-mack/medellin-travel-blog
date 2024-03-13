import BackButton from "@/components/atoms/backButton";
import { ModeToggle } from "@/components/atoms/darkModeToggle";

export default function BackModeHeader() {
  return (
    <div className="w-full flex justify-between">
      <div>
        <BackButton />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
