import React from "react";

export const startDate = {
  date: "2019-12-31T00:00:00",
  update: function () {},
};
export const endDate = {
  date: new Date(),
  update: function () {},
};

export const RangesContext = React.createContext([startDate, endDate]);
