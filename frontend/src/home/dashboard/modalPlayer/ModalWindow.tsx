import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Backdrop, Button, Fade, Modal } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import HomeStore from "../../HomeStore";

type Props = {
};

const ModalWindow: React.FC<Props> = (props: Props) => {

    const handleClose = () => {
        HomeStore.activeEventDisplay = 0
    };

    return <>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="flex items-center justify-center"
        open={HomeStore.activeEventDisplay==1}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={HomeStore.activeEventDisplay==1}>
          <div className="w-screen h-screen p-2 md:p-4">
            <div className="bg-white w-full h-full rounded">

            </div>
            <Button className="absolute top-2 md:top-4 right-2 md:right-4 min-w-min m-2" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} className="text-xl"/>
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
}
  
export default observer(ModalWindow);;