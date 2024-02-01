type TagListProps = {
  tags: string[];
};

const TagList = ({ tags }: TagListProps) => {
  if (!tags) return;

  return (
    <div className="absolute left-4 top-4 flex gap-x-4">
      {tags.map((tag, index) => (
        <span
          key={`tag-${tag}-${index}`}
          className="rounded-4 bg-custom-purple-800 px-4 py-0.5 text-sm capitalize text-white"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
