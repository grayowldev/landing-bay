import {Element} from "@/app/components/element";
import {Container} from "@/app/components/container";

export const Editor = () => {
  return (
      <div className="w-screen h-screen bg-blue-200">
          <Element></Element>
          <Container className="w-1/4 bg-amber-500 p-4">
              <Container className="w-1/4 bg-amber-400 p-4">
                  <h1>Hi</h1>
              </Container>
          </Container>

      </div>
  )

}