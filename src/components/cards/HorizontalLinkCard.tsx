import Link from "next/link";
import React from "react";
import ImageWithFallback from "../images/ImageWithFallback";

type HorizontalLinkCardProps = {
  imageURL: string;
  title: string;
  description: string;
  imageAlt: string;
  link?: string;
};

export default function HorizontalLinkCard(props: HorizontalLinkCardProps) {
  const getOrigin = (urlString: string) => {
    try {
      const url = new URL(urlString);
      return url.origin;
    } catch (error) {
      console.log(error);
      return "";
    }
  };
  const getNameFromUrl = (urlString: string) => {
    try {
      const url = new URL(urlString);
      const host = url.host.replace("www.", "").split(".")[0];
      return host;
    } catch (error) {
      console.log(error);
      return "";
    }
  };
  return (
    <div className="flex flex-row bg-white outline outline-1 outline-gray-200 rounded-lg overflow-hidden shadow-lg gap-4 p-1 h-36">
      <div className="w-32 min-w-0 h-32 ml-1 my-auto">
        <ImageWithFallback
          src={props.imageURL}
          alt={props.imageAlt}
          width={200}
          height={200}
          className="rounded-lg"
          priority
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0 py-1">
        <div className="font-bold truncate text-slate-800">{props.title}</div>
        {props.link && (
          <div className="text-sm truncate text-gray-500 capitalize w-min">
            <Link href={getOrigin(props.link)} target="_blank">
              {getNameFromUrl(props.link)}
            </Link>
          </div>
        )}
        <div className="line-clamp-2 text-sm pr-4 pt-2 lg:w-full">
          {props.description}
        </div>
        {props.link && (
          <div className="w-28 mt-auto">
            <Link href={props.link} target="_blank">
              <div className="border border-gray-300 rounded-lg py-1 px-2 w-28 text-center text-sm">
                Go to recipe
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
