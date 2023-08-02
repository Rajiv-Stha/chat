export const getMsgfromLS = () => {
  let message = localStorage.getItem("message");
  if (message) {
    message = JSON.parse(message);
  }
  return message || [];
};

export const setMsgToLS = (chatlist) => {
  const prev = getMsgfromLS();
  let allMsg = [...prev, chatlist];
  localStorage.setItem("message", JSON.stringify(allMsg));
};
