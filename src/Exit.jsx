import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Exit({ onExit }) {
  const navigate = useNavigate();

  useEffect(() => {
    onExit();          // clear name + localStorage
    navigate("/", { replace: true });
  }, []);

  return null; // nothing to render
}

export default Exit;