package com.nino.app.hrishiring;

import com.nino.app.hrishiring.NsbActivities;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-05-30T08:12:27")
@StaticMetamodel(NsbActivityStatusHist.class)
public class NsbActivityStatusHist_ { 

    public static volatile SingularAttribute<NsbActivityStatusHist, String> updatedBy;
    public static volatile SingularAttribute<NsbActivityStatusHist, NsbActivities> nsbactivitiesidSourcingActivities;
    public static volatile SingularAttribute<NsbActivityStatusHist, String> from;
    public static volatile SingularAttribute<NsbActivityStatusHist, Date> updatedDt;
    public static volatile SingularAttribute<NsbActivityStatusHist, String> to;
    public static volatile SingularAttribute<NsbActivityStatusHist, Integer> idactivityStatusHist;

}