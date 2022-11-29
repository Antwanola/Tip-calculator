import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content:${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  position: ${({ position }) => position};
  /* margin-bottom:2rem; */

  @media (max-width: 786px) {
            flex-direction: ${({ smal_direction }) => smal_direction};
            background: ${({ bg }) => bg} ;
            width: ${({ width }) => width};
            justify-content: ${({ smJustify }) => smJustify};
            margin-left: ${({ mLeft }) => mLeft};
            /* margin-bottom:2rem; */
        }
  /* flex: 0 0 1%; */
  /* & > div,
  & > ul {
    flex: 1;
  } */

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  } */
`
