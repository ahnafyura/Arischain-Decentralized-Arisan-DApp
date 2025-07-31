import mockData from "../data/mockArisanData.json";

export const getMockGroups = () => {
  return mockData.groups;
};

export const getMockGroupById = (id) => {
  return mockData.groups.find((group) => group.id === id);
};

export const addMockParticipant = (groupId, address) => {
  const group = getMockGroupById(groupId);
  if (group) {
    group.participants.push({ address, hasPaid: false, hasWon: false });
  }
};
