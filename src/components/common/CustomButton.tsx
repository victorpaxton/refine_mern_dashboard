import { Button } from '@pankod/refine-mui';

import { CustomButtonProps } from 'interfaces/common';

const CustomButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <Button
      sx={{
        flex: fullWidth ? 1 : 'unset',
        width: fullWidth ? '100%' : 'fit-content',
        minWidth: 130,
        gap: '10px',
        padding: '10px 15px',
        fontSize: 16,
        fontWeight: 600,
        backgroundColor,
        color,
        textTransform: 'capitalize',
        '&:hover': { opacity: 0.9, backgroundColor },
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
