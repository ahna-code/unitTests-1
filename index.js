const formatDate = (timeInSeconds) => {
  if (!timeInSeconds) timeInSeconds = 0;
     const days = Math.floor(timeInSeconds / 86400);
     const hours = Math.floor((timeInSeconds % 86400) / 3600);
     const minutes = Math.floor((timeInSeconds % 3600) / 60);
     const seconds = Math.floor(timeInSeconds % 60);

     return `${days !== 0 ? `${days}d` : ''}${days && hours ? ' ' : $
};

module.exports = formatDate;
