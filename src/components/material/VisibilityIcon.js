import SvgIcon from "@mui/material/SvgIcon";
import { useEffect, useState } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { changeVisible } from "../../redux/modules/visibilSlcie";
import { useSelector, useDispatch } from "react-redux";

const Visibility = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.visibil);

  const onClickVisibil = () => {
    dispatch(changeVisible(state.visibil));
  };

  return (
    <>
      {state.visibil ? (
        <SvgIcon
          component={VisibilityOffIcon}
          inheritViewBox
          onClick={onClickVisibil}
        />
      ) : (
        <SvgIcon
          component={VisibilityIcon}
          inheritViewBox
          onClick={onClickVisibil}
        />
      )}
    </>
  );
};

export default Visibility;
