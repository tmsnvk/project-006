import { trackClick } from "utilities/helpers/analytics";

export const useNextDefaultChoice = (category: string) => {
  const handleClick = () => trackClick(category);

  return { handleClick };
};