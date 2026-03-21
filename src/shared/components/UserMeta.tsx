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
    username = "takopi/Rahim",
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
          className="w-8 h-8 rounded-full"
        />
      </div>
      {/* right */}
      <div className="flex flex-col gap-p0-5">
        {/* username */}
        <div>
          <span className="text-m14 text-black-80">{username}</span>
        </div>
        {/* stats */}
        <div className="flex items-center gap-p1-5 text-l14 text-black-60">
          <div className="flex items-center gap-0.5">
            <TagIcon className="w-3 h-3" />
            <span>{version}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <StarIcon className="w-3 h-3" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <BookmarkIcon className="w-3 h-3" />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
