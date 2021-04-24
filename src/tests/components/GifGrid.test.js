import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  // let wrapper;
  const category = "One punch man";
  const gifs = [
    {
      id: "ABC",
      url: "https://localhost/cualquier/cosa.jpg",
      title: "Cualquier cosa",
    },
  ];

  /*beforeEach(() => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        wrapper = shallow(<GifGrid category={category}/>);
    });*/

  test("Debe mostrar el componente correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  });
});
