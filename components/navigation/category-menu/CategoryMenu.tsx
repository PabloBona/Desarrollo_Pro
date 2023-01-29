import { IoFilterCircleOutline } from 'react-icons/io5';
import { categories } from '../../../lib/data/categories';
import Button from '../../buttons/Button';

export default function CategoryMenu() {
  return (
    <div className="flex items-center justify-between app-container">
      <div className="hidden items-center gap-3  md:flex">
        {categories.map((item, index) => (
          <Button key={index} size="md">
            {item.name}
          </Button>
        ))}
      </div>
      <IoFilterCircleOutline
        className="block md:hidden text-app-grayDark"
        size={45}
      />
      <div>
        <input
          className="px-6 py-4 border border-app-grayDark rounded-3xl w-full sm:w-[370px] text-[13px]"
          type={'text'}
          placeholder="¿Qué quieres ver en tu cuidad?"
        />
      </div>
    </div>
  );
}
