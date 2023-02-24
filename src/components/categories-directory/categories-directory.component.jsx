import DirectoryItem from '../directory-item/directory-item.component';
import { CategoriesDirectoryContainer } from './categories-directory.styles';

const CategoriesDirectory = ({ categories }) => {
  return (
    <CategoriesDirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesDirectoryContainer>
  );
};

export default CategoriesDirectory;
