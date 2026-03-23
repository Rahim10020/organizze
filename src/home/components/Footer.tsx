import { ArrowLeftIcon } from "../../shared/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import { TelegramIcon } from "../../shared/icons/TelegramIcon";
import { TwitterIcon } from "../../shared/icons/TwitterIcon";

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col border-t border-black-5">
        <div className="flex justify-between py-p8">
          {/* Previous */}
          <div className="flex items-end gap-p4 cursor-pointer">
            <ArrowLeftIcon className="w-6 h-6 text-black-80" />
            <div className="flex flex-col">
              <span className="text-l16 text-black-60 hover:text-black-50">
                Previous
              </span>
              <h4 className="text-r18 text-black-80">Switch engines</h4>
            </div>
          </div>
          {/* Next */}
          <div className="flex items-end gap-p4 cursor-pointer">
            <div className="flex flex-col items-end">
              <span className="text-l16 text-black-60 hover:text-black-50">
                Next
              </span>
              <h4 className="text-r18 text-black-80">Worktrees</h4>
            </div>
            <ArrowRightIcon className="w-6 h-6 text-black-80" />
          </div>
        </div>
        <div className="bg-black-5 flex items-center justify-end py-p8 ">
          <div className="flex items-center gap-p4">
            <TwitterIcon className="w-4 h-4 hover:text-black-40 cursor-pointer" />
            <TelegramIcon className="w-4 h-4 hover:text-black-40 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
