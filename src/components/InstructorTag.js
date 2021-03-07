import instructors from "./Instructors";
import { AppWrapper, Emoji, TagWrapper, Name, GoToGithub } from "./styles";

const InstructorTag = () => {
  return (
    <div>
      {instructors.map((instructor) => {
        return (
          <TagWrapper onClick={() => window.open(instructor.click)}>
            <Emoji>{instructor.logo}</Emoji>
            <Name>{instructor.name}</Name>
            <GoToGithub>Go to GitHub</GoToGithub>
          </TagWrapper>
        );
      })}
    </div>
  );
};
export default InstructorTag;
