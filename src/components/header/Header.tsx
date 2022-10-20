import { useEffect, useState } from 'react';
import { HeaderTab, SEARCH_MOVIE_TAB, MY_FAVORITE_TAB, DEFAULT_MOVIE_KEYWORD } from './constant';
import './style.scss';

let timeId: any;
interface HeaderProps {
  onSearch?: (keyword: string) => void;
  onChangeTab?: (tabName: HeaderTab) => void;
}

const Header = ({ onSearch, onChangeTab }: HeaderProps) => {
  const [activeTab, setActiveTab] = useState(SEARCH_MOVIE_TAB);
  const [keyword, setKeyword] = useState(DEFAULT_MOVIE_KEYWORD);

  useEffect(() => {
    if (onChangeTab) { onChangeTab(SEARCH_MOVIE_TAB) }
  }, []);
  
  const onClickTab = (tabName: HeaderTab) => {
    setActiveTab(tabName);
    if (onChangeTab) { onChangeTab(tabName) }

    if (tabName === SEARCH_MOVIE_TAB) {
      setKeyword(DEFAULT_MOVIE_KEYWORD);
    }
  }

  const onChangeInput = (e: any) => {
    setKeyword(e.target.value);
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      if (onSearch) {
        onSearch(e.target.value);
      }
    }, 1500);
  }

  const onKeydown = (e: any) => {
    clearTimeout(timeId);
    if (e.key === 'Enter' && onSearch) {
      onSearch(keyword);
    }
  }

  return (
    <div className='header'>
      <div className='left-side'>
        <h1>
          M
          <span>Cinema</span>
        </h1>

        <div className='header-tab'>
          <div
            onClick={() => onClickTab(SEARCH_MOVIE_TAB)}
            className={ 'tab-text' + (activeTab === SEARCH_MOVIE_TAB ? ' active' : '') }>
              Search Movie
          </div>

          <div
            onClick={() => onClickTab(MY_FAVORITE_TAB)}
            className={ 'tab-text' + (activeTab === MY_FAVORITE_TAB ? ' active' : '') }>
              My Favorite
          </div>
        </div>
      </div>

      { activeTab === SEARCH_MOVIE_TAB &&
        <div className='right-side'>
          <input
            type='text'
            id='search'
            value={keyword}
            className={keyword.trim().length ? 'freeze-trans' : ''}
            onChange={(e) => onChangeInput(e)}
            onKeyDown={(e) => onKeydown(e)}
          />
          <label htmlFor='search'></label>
        </div>
      }
    </div>
  );
}

export default Header;
