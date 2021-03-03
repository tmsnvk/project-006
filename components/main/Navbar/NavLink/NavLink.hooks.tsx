import { trackClick } from "utilities/helpers/analytics";

export const useNavLinkTracking = () => {
  const handleClick = () => trackClick("navbar");

  return { handleClick };
};