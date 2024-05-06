import { TrashIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

type ImageInputProps = {
  onChange: (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => void;
};

export function ImageInput(props: ImageInputProps) {
  const [images, setImages] = useState<ImageListType>([]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    setImages(imageList);
    props.onChange(imageList, addUpdateIndex);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        dataURLKey="data_url"
        maxNumber={3}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="text-gray-400 flex flex-col gap-1">
            <button
              className="border-2 border-dashed border-blue-300 px-4 py-2 w-full h-32 rounded-md font-bold text-center"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              type="button"
              {...dragProps}
            >
              Click or Drop here
            </button>
            {imageList.length > 0 && (
              <button
                onClick={onImageRemoveAll}
                className="text-red-800 px-2 py-1 ml-auto flex items-center gap-1 hover:opacity-80 text-xs bg-red-100 rounded-md"
                type="button"
              >
                <TrashIcon className="w-4 h-4" />
                Remove all images
              </button>
            )}
            <div className="flex flex-row gap-2">
              {imageList.map((image, index) => (
                <div key={index} className="flex flex-col gap-1 w-28 relative">
                  <img
                    src={image["data_url"]}
                    width="112"
                    className="rounded-md"
                  />
                  <button
                    className="text-white bg-black absolute top-1 right-1 px-2 py-1 ml-auto hover:bg-gray-800 text-xs rounded-md truncate"
                    type="button"
                    onClick={() => onImageRemove(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
