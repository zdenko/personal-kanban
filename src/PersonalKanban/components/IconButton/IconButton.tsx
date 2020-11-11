import React from "react";
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

const icons = {
  edit: EditIcon,
  delete: DeleteIcon,
  add: AddIcon,
  deleteSweep: DeleteSweepIcon,
};

type IconButtonProps = MuiIconButtonProps & { icon: keyof typeof icons };

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, ...rest } = props;
  const Icon = icons[icon];
  return Icon ? (
    <MuiIconButton size="small" {...rest}>
      <Icon fontSize="small" />
    </MuiIconButton>
  ) : null;
};

export default IconButton;
