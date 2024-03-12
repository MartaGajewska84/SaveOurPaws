import { Switch } from '@nextui-org/react';
import { MoonIcon } from '../icons/MoonIcon';
import { SunIcon } from '../icons/SunIcon';

export default function DarkModeSwitch() {
  return (
    <Switch
      defaultSelected
      size="md"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
      
    </Switch>
  );
}