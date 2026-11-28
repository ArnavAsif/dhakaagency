import { ProcessStepIcon } from "@/components/shared/ArolaxIcons";
import {
  CLASSIC_BG_CONTAINER_SETTINGS,
  DEFAULT_CONTAINER_SETTINGS,
  TEXT_MOVE_DEFAULT_SETTINGS,
  TEXT_REVEAL_DEFAULT_SETTINGS,
} from "@/components/shared/elementorSettings";
import { PROCESS_STEPS } from "@/data/website-data";

export default function WorkProcessSection() {
  return (
    <div
      className="elementor-element elementor-element-d0c9d71 e-con-full e-flex wcf-starter-animations-none e-con e-parent"
      data-id="d0c9d71"
      data-element_type="container"
      data-e-type="container"
      data-settings={CLASSIC_BG_CONTAINER_SETTINGS}
    >
      <div
        className="elementor-element elementor-element-ef6d495 e-flex e-con-boxed wcf-starter-animations-none e-con e-child"
        data-id="ef6d495"
        data-element_type="container"
        data-e-type="container"
        data-settings={DEFAULT_CONTAINER_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-3a5bc64 e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="3a5bc64"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            <div
              className="elementor-element elementor-element-56b0a0f e-con-full e-flex wcf-starter-animations-none e-con e-child"
              data-id="56b0a0f"
              data-element_type="container"
              data-e-type="container"
              data-settings={DEFAULT_CONTAINER_SETTINGS}
            >
              <div
                className="elementor-element elementor-element-cd1dda2 wcf-t-animation-text_reveal wcf-starter-animations-none elementor-widget elementor-widget-heading"
                data-id="cd1dda2"
                data-element_type="widget"
                data-e-type="widget"
                data-settings={TEXT_REVEAL_DEFAULT_SETTINGS}
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    How We Deliver
                    <br />
                    Predictable Growth
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-0ccc16e e-con-full e-flex wcf-starter-animations-none e-con e-child"
                data-id="0ccc16e"
                data-element_type="container"
                data-e-type="container"
                data-settings={DEFAULT_CONTAINER_SETTINGS}
              >
                <div
                  className="elementor-element elementor-element-15aaea1 elementor-widget__width-initial wcf-t-animation-text_move wcf-starter-animations-none elementor-widget elementor-widget-text-editor"
                  data-id="15aaea1"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={TEXT_MOVE_DEFAULT_SETTINGS}
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      Our proven 4-step agency methodology turns complexity into scalable,
                      measurable digital revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-c9096ae e-con-full e-flex wcf-starter-animations-none e-con e-child"
            data-id="c9096ae"
            data-element_type="container"
            data-e-type="container"
            data-settings={DEFAULT_CONTAINER_SETTINGS}
          >
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.widgetDataId}
                className={`elementor-element elementor-element-${step.containerDataId} e-con-full e-flex wcf-starter-animations-none e-con e-child`}
                data-id={step.containerDataId}
                data-element_type="container"
                data-e-type="container"
                data-settings={DEFAULT_CONTAINER_SETTINGS}
              >
                <div
                  className={`elementor-element elementor-element-${step.widgetDataId} elementor-widget__width-initial elementor-widget elementor-widget-wcf--icon-box`}
                  data-id={step.widgetDataId}
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings={step.dataSettings}
                  data-widget_type="wcf--icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="wcf__iconbox style-">
                      <div className="elementor-icon icon">
                        <ProcessStepIcon icon={step.icon} />
                      </div>
                      <h3 className="title">{step.title}</h3>
                      <div className="desc">
                        <p>{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
