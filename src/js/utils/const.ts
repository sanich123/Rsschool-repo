export const BTNS_VALUES = ["select", "delete"];
export const BTN_VALUES = {
    select: 'select',
    delete: 'delete',
}
export const ROUTES = { garage: "#garage", winners: "#winners" };
export const URL_ROUTES = {
    garage: 'garage',
    winners: 'winners',
    engine: 'engine',
};
export const ROOT_URL = 'http://127.0.0.1:3000';
export const METHODS_HTTP = {
    post: 'POST',
    delete: 'DELETE',
    put: 'PUT',
    patch: 'PATCH',
};
export const HEADERS_INFO = {"Content-Type": "application/json"};

export const NETWORK_ERROR = '<h1>Произошла ошибка во время загрузки данных, проверьте ваше интернет-соединение</h1>';
export const EMPTY_CARSLIST = '<h1>Чтобы играть в машинки, малыш, надо создать их по одной, либо сгенерировать сотенку</h1>';
export const EMPTY_WINNERSLIST = '<h1>Пока никто не побеждал, либо все машинки удалились</h1>';
export const LS_KEYS = {
    pageNumber: 'pageNumber',
    pageNumberWinners: 'pageNumberWinners',
    createCarValue: 'createCarValue',
    updateCarValue: 'updateCarValue',
    updateCarColor: 'updateCarColor',
    createCarColor: 'createCarColor',
};
export const INITIAL_NUMBER_PAGE = 1;
export const DEFAULT_AMOUNT_OF_ITEMS = 7;
export const DEFAULT_AMOUNT_OF_ITEMS_WINNERS = 10;
export const PAGINATION_BTNS = {
    next: 'next', previous: 'previous'
}
export const CAR_ICON_WIDTH_SMALL = 50;
export const CAR_ICON_HEIGHT_SMALL = 50;
export const CAR_ICON_WIDTH_DEFAULT = 104;
export const CAR_ICON_HEIGHT_DEFAULT = 104;
export const MILLISECONDS_IN_SECONDS = 1000;

export enum SEARCH_PARAMS {
    sort = '_sort',
    time = 'time',
    order ='_order',
    wins = 'wins',
    asc = 'ASC',
    desc = 'DESC',
    id ='id',
    started = 'started',
    stopped = 'stopped',
    status = 'status',
    drive = 'drive',
}

export const DEFAULT_COLOR = '#000000';
export const SUCCESS_UPDATE_CAR = 'Данные машинки успешно обновлены';
export const FAILED_SEARCH = 'Машины с таким названием нет в базе';