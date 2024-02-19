type TagListProps = {
  tags: string[];
};

const TagList = ({ tags }: TagListProps) => {
  if (tags.length < 1) return;

  return (
    <ul className="absolute left-4 top-4 flex flex-wrap gap-4">
      {tags.map((tag, index) => (
        <li
          key={`tag-${tag}-${index}`}
          className="rounded-4 bg-custom-purple-800 px-4 py-0.5 text-sm capitalize text-white"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
