/** @format */
import React from "react";
import { useState, useEffect } from "react";
import {
  BoxStyle,
  GreenBox,
  ButtonStyle,
  FormInputs,
  ResetBtn,
} from "./styled/Box.styled";
import { Flex } from "./styled/Flex.styled.js";

export default function Box() {
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(0);
  const [people, setPeople] = useState(0);
  const [personInterest, setpersonInterest] = useState(0);
  const [personTotal, setpersonTotal] = useState(0);
  const [error, seterror] = useState(false)

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const buttonPressed = (value) => {
    setPercent(value);
  };
  const percentInput = (e) => {
    setPercent(e.target.value);
  };

  const sharePeople = (e) => {
    setPeople(e.target.value)
  };

  const _reset = () =>{
    setBill(0);
    setPercent(0);
    setPeople(0);
    setpersonInterest(0);
    setpersonTotal(0)
  }

useEffect(() => {
  if(bill !==0 && percent !==0 && people !==0 ){
    let percentageInterest = percent/100;
    let interest = percentageInterest * bill;
    let amountPerPerson = interest/people;
    let totalAmountPerPerson = bill/people +amountPerPerson;
    setpersonInterest(amountPerPerson.toFixed(2));
    setpersonTotal(totalAmountPerPerson.toFixed(2))


  }

 
}, [people && bill && percent])


  return (
    <BoxStyle>
      <Flex justify="space-between" direction="row" smal_direction="column" smJustify="center" mLeft="1rem">
        <FormInputs>
          <form action="" id="form1">
            <label htmlFor="firstInput">Bill</label>
            <span>$</span>
            <input
              type="number"
              name=""
              id="firstInput"
              onChange={handleBillChange}
              value={bill}
            />
          </form>

          <div id="btn-wrap">
            <label htmlFor="btn"> Select Tip %</label>
            <Flex
              wrap="wrap"
              position="relative"
              direction="row"
              width="200%"
              name="btn"
            >
              <ButtonStyle onClick={() => buttonPressed(5)}>5%</ButtonStyle>
              <ButtonStyle onClick={() => buttonPressed(10)}>10%</ButtonStyle>
              <ButtonStyle onClick={() => buttonPressed(15)}>15%</ButtonStyle>
              <ButtonStyle onClick={() => buttonPressed(25)}>25%</ButtonStyle>
              <ButtonStyle onClick={() => buttonPressed(50)}>50%</ButtonStyle>
              <input
                type="number"
                name=""
                id="percentageInput"
                onChange={percentInput}
                value={percent}
              />
            </Flex>
          </div>

          <label htmlFor="people">Number of People</label>
          
          <form action="" id="form2">
            <span className="material-icons" id="icon1">
              person
            </span>
            <input type="number" name="people" id="" onChange={sharePeople} value={people} />
          </form>
        </FormInputs>

        <GreenBox>
          <Flex justify="space-between">
            <Flex direction="column">
              <p>Tip Amount</p>
              <span>/person</span>
            </Flex>
            <div>
              <h2>$ {personInterest}</h2>
            </div>
          </Flex>

          <Flex justify="space-between">
            <Flex direction="column">
              <p>Total</p>
              <span>/person</span>
            </Flex>
            <div>
              <h2>$ {personTotal}</h2>
            </div>
          </Flex>

          <ResetBtn onClick={_reset} >Reset</ResetBtn>
        </GreenBox>
      </Flex>
    </BoxStyle>
  );
}
