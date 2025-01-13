import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f7f7f8;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.05) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 2px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #5f52ff;
`;

const Home = styled.h1`
  font-size: 2rem;
  color: #5f52ff;
  cursor: pointer;
`;

const ProfileGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileTitle = styled.p`
  margin-top: 10px;
  color: #6e6e7b;
`;

const DescriptionBox = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DescriptionTitle = styled.h2`
  color: #5f52ff;
`;

const DescriptionText = styled.p`
  color: #444455;
`;

const profileData = [
  {
    id: 1,
    title: "ChatGPT",
    imageUrl: "https://i.imgur.com/ALR87zL.png",
    description:
      "최근에 사용하기 시작했는데 이제는 없으면 못 버틸 정도다.<br> 코딩 실전 압축 근육이 남들보다 부족할 수도 있지만, <br>배경 지식을 이해하고 지속적으로 개발을 이어가는 데 초점을 두고 있다.",
  },
  {
    id: 2,
    title: "로스트아크",
    imageUrl: "https://i.imgur.com/C8tgrMi.jpeg",
    description:
      "요즘 로스트아크만 하고 있다.<br> 로스트아크에서 얻은 전략적 사고와 협업 경험이 개발에 도움이 되지 않을까 기대 중이다.",
  },
  {
    id: 3,
    title: "Jazz",
    imageUrl: "https://i.imgur.com/9JpXoTB.jpeg",
    description: "재즈 음악은 감성을 자극하고 집중력을 높여준다.",
    link: "https://www.youtube.com/watch?v=XlcKiizWQVI",
  },
  {
    id: 4,
    title: "Python 매크로 개발",
    imageUrl: "https://i.imgur.com/zLSWYMQ.jpeg",
    description:
      "최근 친구들과 마인크래프트를 즐기고 있다.<br> 친구들은 게임을 즐기지만, 나는 Python으로 낚시 자동화 매크로를 만들어보는 데 집중하고 있다 <br>너무 재밌어서 시간 가는줄 모른다.. 새로운 취미가 생긴것 같다<br> 예전에 시도 해봤을땐 코드가 이해되지 않았지만, JavaScript를 배우고 나니 GPT가 생성한 코드를 어느 정도 이해할 수 있게 되었다. 신기하다!",
  },
];

const 봉재완 = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleImageClick = (profile) => {
    if (profile.link) {
      window.open(profile.link, "_blank");
    } else {
      setSelectedProfile(profile);
    }
  };

  return (
    <Container>
      <Home href="../">2팀 홈</Home>
      <Header>
        <a
          href="https://namu.wiki/w/%EA%B3%A0%EB%9D%BC%ED%8C%8C%EB%8D%95(Pok%C3%A9mon%20UNITE)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProfilePhoto
            src="https://i.imgur.com/jzxZc0t.jpeg"
            alt="내 프로필 사진"
          />
        </a>
        <Title>길고 가늘게 가는게 꿈인 풀스택 웹 개발자</Title>
      </Header>
      <ProfileGrid>
        {profileData.map((profile) => (
          <ProfileCard
            key={profile.id}
            onClick={() => handleImageClick(profile)}
          >
            <ProfileImage src={profile.imageUrl} alt={profile.title} />
            <ProfileTitle>{profile.title}</ProfileTitle>
          </ProfileCard>
        ))}
      </ProfileGrid>
      {selectedProfile && (
        <DescriptionBox>
          <DescriptionTitle>{selectedProfile.title}</DescriptionTitle>
          <DescriptionText
            dangerouslySetInnerHTML={{ __html: selectedProfile.description }}
          />
        </DescriptionBox>
      )}
    </Container>
  );
};

export default 봉재완;
