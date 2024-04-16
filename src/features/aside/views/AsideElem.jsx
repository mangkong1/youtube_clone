import * as S from "../styles/AsideStyle";

const AsideElem = (props) => {
  const { iconSrc, name } = props.data;
  console.log(iconSrc);
  return (
    <S.AsideInfo>
      <S.AsideIcon src={iconSrc} />
      <S.AsideName>{name}</S.AsideName>
    </S.AsideInfo>
  );
};

export default AsideElem;
