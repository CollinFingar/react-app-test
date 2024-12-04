import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTestData } from "../store/reducers/testSlice";
import { AppDispatch } from "../store/store";
// import Socket from "../socket/Socket";

import { TestWrapper } from "./Test.style";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  // Retrieve the fake data from state
  const data = useSelector((state: any) => state.test.data);

  const dispatch = useDispatch<AppDispatch>();

  // Fetch  the fake data on load
  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  return (
    <TestWrapper>
      {/* <Socket /> */}
      test data: {data.title}
    </TestWrapper>
  );
};

export default Header;
