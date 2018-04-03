package space.qmen.lot.model.param;

import lombok.Data;

@Data
public class AreaSpaceAvailableParam extends SpaceAvailableParam {

    private long areaId;
    private String keyword;
}
