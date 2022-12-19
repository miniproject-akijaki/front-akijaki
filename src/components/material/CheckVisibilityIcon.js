import SvgIcon from "@mui/material/SvgIcon";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { changeCheckVisible } from "../../redux/modules/visibilSlcie";
import { useSelector, useDispatch } from "react-redux";

const CheckVisibility = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.visibil);

  const onClickVisibil = () => {
    dispatch(changeCheckVisible(state.checkVisibil));
  };

  return (
    <>
      {state.checkVisibil ? (
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

export default CheckVisibility;
