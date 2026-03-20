import { BookmarkIcon } from "../icons/BookmarkIcon";
import { StarIcon } from "../icons/StarIcon";
import { TagIcon } from "../icons/TagIcon";

export type UserMetaProps = {
  username?: string;
  version?: string;
  stars?: number;
  forks?: number;
};

export function UserMeta(props: UserMetaProps) {
  const {
    username = "Rahim",
    version = "3.2.0",
    stars = 2343,
    forks = 167,
  } = props;

  return (
    <div className="flex items-center gap-p1">
      {/* avatar */}
      <div className="flex items-center justify-center">
        <img
          src="/images/avatar.png"
          alt="avatar image"
          className="w-10 h-10 rounded-full"
        />
      </div>
      {/* right */}
      <div className="flex flex-col gap-p0-5">
        {/* username */}
        <div>
          <span>{username}</span>
        </div>
        {/* stats */}
        <div className="flex items-center gap-p1-5">
          <div className="flex items-center gap-0.5">
            <TagIcon className="w-5 h-5" />
            <span>{version}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <StarIcon className="w-5 h-5" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <BookmarkIcon className="w-5 h-5" />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
